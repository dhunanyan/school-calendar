import CurrentPage from "../pageobjects/current.page.js";
import { CURRENT_SEM_DATA } from "../data.js";
import { updateSubjectName } from "../helpers.js";

let csv = "id;title;teacher;date;startTime;endTime;location;group\n";
let outputId = 0;

describe("My Login application", () => {
  CURRENT_SEM_DATA[process.env.SEM].forEach((DATA, i) => {
    it(`Get data from nth subject: (${i})`, async () => {
      await CurrentPage.open(DATA[0], DATA[1]);

      const currentTimeArray = await CurrentPage.currentTimeArray;
      const title = await CurrentPage.getTitleText();
      const shortTitle = updateSubjectName(title);
      const outputType = await CurrentPage.getTypeText();
      const outputTeacher = await CurrentPage.getTeacherText();
      const outputTitle = `${outputType} ${shortTitle}`;

      for (let j = 0; j < currentTimeArray.length; j++) {
        const currentDetails = await currentTimeArray[j].getText();
        const currentDetailsArr = `${currentDetails}`
          .replace(/(\r\n|\n|\r)/gm, " ")
          .split(" ");

        const outputDate = currentDetailsArr[0];
        const outputStartTime = currentDetailsArr[1];
        const outputEndTime = currentDetailsArr[3];
        const outputLocation =
          currentDetailsArr[6] + " / " + currentDetailsArr[5];

        const line = `${outputId};${outputTitle};${outputTeacher};${outputDate};${outputStartTime};${outputEndTime};${outputLocation};gr_${DATA[1]}\n`;
        csv = csv + line;
        outputId++;
      }
    });
  });
  it("Print data", async () => {
    console.log("CSV\n", csv);
  });
});
