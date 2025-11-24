/**
 * Python package
 */
export class PythonPackage {
  name: string;
  version: string;
  constructor(name: string, version: string) {
    this.name = name;
    this.version = version;
  }
}

/**
 * Single line in requirements.txt file
 */
export class RequirementsLine {
  line: string;

  constructor(line: string) {
    this.line = line;
  }
}
