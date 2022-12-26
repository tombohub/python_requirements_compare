import { PythonPackage } from "./domain";
import _ from "lodash";
export function compare(text1: string, text2: string) {
  const packageList1 = text1.trim().split("\n");
  const packageList2 = text2.trim().split("\n");
  const extraText1 = _.difference(packageList1, packageList2);
  const extraText2 = _.difference(packageList2, packageList1);
  return extraText2;
}

export function listPackages(text: string) {
  const list = text.split("\n");
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
