import resume from "../personal-info/resume.json";
import { HistoryItem } from "./@types/resume";
import ejs from "ejs";
import { promises as fsp } from "fs";

// 履歴情報を年月の昇順に整えておく
function sortOrder(): void {
  const compare = (prev: HistoryItem, next: HistoryItem) => {
    return prev.year * 100 + prev.month - (next.year * 100 + next.month);
  };
  resume.education = resume.education.sort(compare);
  resume.work_experience = resume.work_experience.sort(compare);
  resume.certification = resume.certification.sort(compare);
}

// 改行をbrタグに変換する
function convertToBR(): void {
  const convert = (str: string) => str && str.replace(/\n/g, "<br />");
  const convertAll = (items: HistoryItem[]) => {
    items.forEach((item) => {
      if (item.detail) {
        item.detail = convert(item.detail);
      }
    });
  };
  resume.summary = convert(resume.summary);
  convertAll(resume.education);
  convertAll(resume.work_experience);
  convertAll(resume.certification);
}

// プロフィール画像をbase64エンコードする(ejsにバインドするため)
function readPhoto(): Promise<string | void> {
  return fsp
    .readFile("src/assets/photo.png")
    .then((data) => data.toString("base64"))
    .catch((err) =>
      console.error("ERROR: can not read photo.", err.toString())
    );
}

(async () => {
  sortOrder();
  convertToBR();
  const photo = await readPhoto();
  // ejsファイルを読み込んでrender
  const renderedString = await fsp
    .readFile("src/template/resume.ejs.html", "utf8")
    .then((data) => ejs.render(data, { resume, photo }))
    .catch((err) =>
      console.error("ERROR: can not read template.", err.toString())
    );

  // render結果をファイルに出力
  await fsp
    .writeFile("dist/resume.html", renderedString, "utf8")
    .catch((err) =>
      console.error("ERROR: can not write distfile.", err.toString())
    );
})();
