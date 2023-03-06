import Page from "./page.js";
class CurrentPage extends Page {
  get currentTimeArray() {
    return $$("table#lista_dat_spotkan>tbody>tr");
  }

  get title() {
    return $("h1>span.block>a");
  }

  get type() {
    return $("tbody.autostrong>tr:nth-of-type(2)>td.strong+td");
  }

  get teacher() {
    return $("tbody.autostrong>tr:last-of-type>td.strong+td");
  }

  async getTitleText() {
    return await this.title.getText();
  }

  async getTypeText() {
    const typeSufix = await this.type.getText();

    return "[" + `${typeSufix}`.split(",")[0].split(")")[1].split("[")[1];
  }

  async getTeacherText() {
    return await this.teacher.getText();
  }

  open(id, group) {
    return super.open(id, group);
  }
}

export default new CurrentPage();
