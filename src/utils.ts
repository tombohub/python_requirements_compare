import { PythonPackage } from "./domain";
import _ from "lodash";
export function compare(requirements1: string, requirements2: string) {
  const packageList1 = listPackages(requirements1);
  const packageList2 = listPackages(requirements2);
  const extraText1 = _.differenceWith(packageList1, packageList2, _.isEqual);
  const extraText2 = _.difference(packageList2, packageList1);
  return extraText1;
}

export function listPackages(text: string) {
  const list = text.trim().split("\n");
  return list.map(x => extractPackageInfo(x));
}

/**
 * Extracts package infor from single line in requirements.txt:
 * `django==4.1` -> returns `{name: django, version: 4.1}
 * @param textLine line from requirements.txt
 * @returns package name
 */
function extractPackageInfo(textLine: string) {
  const name = textLine.split("==")[0];
  const version = textLine.split("==")[1];
  return { name, version };
}
