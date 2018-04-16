import * as $ from "jquery";
import * as jsdom from "jsdom";
import Speaker from "../domains/speacker";

export class SpeakerService {
  findAll(): Promise<Speaker[]> {
    return $.get("http://www.breizhcamp.org/conference/speakers/").then(
      (data: string) => {
        let start = "<body>";
        let end = "</body>";
        data = data.substring(
          data.indexOf(start) + start.length,
          data.indexOf(end)
        );
        let body = document.createElement("body");
        body.innerHTML = data;
        let speakerBox = body
          .querySelector("#content")
          .querySelector("div.container")
          .querySelector("div.row")
          .querySelectorAll("div.speaker-box");
        let speakers: Speaker[] = [];
        Array.from(speakerBox).forEach((box: any) => {
          let value = box
            .querySelector("div.speaker")
            .querySelector("div.media")
            .querySelector("div.media-body")
            .querySelector("h3").innerHTML;
          let sp = new Speaker();
          sp.name = value;
          speakers.push(sp);
        });
        return speakers;
      }
    );
  }
}
