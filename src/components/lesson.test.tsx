import { getByTestId, render, fireEvent  } from "@testing-library/react";
import RenderLessons, { Lesson } from "./lesson";
import { describe, expect, it } from "vitest";

describe("RenderLessons", () => {

  //Ensures the component renders correctly with a full lesson object.
  it("should render properly", () => {
    const lesson: Lesson = {
        "title": "Understanding HTML Structure",
        "description": "Learn about HTML tags and document structure",
        "topics": ["HTML tags", "Document structure", "Semantic HTML"],
        "content": [
          {
            "type": "text",
            "data": "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser."
          },
          {
            "type": "video",
            "data": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
        ]
      };
      ////Uses the render function from @testing-library/react to render the RenderLessons component with the sample lesson.
    render(<RenderLessons lesson={lesson} />);
  });


  //Checks that all content items are rendered.
  it("should show the content items", () => {

    const lesson: Lesson = {
        "title": "Understanding HTML Structure",
        "description": "Learn about HTML tags and document structure",
        "topics": ["HTML tags", "Document structure", "Semantic HTML"],
        "content": [
          {
            "type": "text",
            "data": "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser."
          },
          {
            "type": "video",
            "data": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
        ]
      };

      const { getByTestId, getByText } = render(<RenderLessons lesson={lesson} />);
      const button = getByText("Show Details");
      fireEvent.click(button);
    expect(
        getByTestId('content-list').children.length
    ).toBe(lesson.content.length);
  });

//Tests the component's robustness when given an empty lesson object.
  it("should render properly even if the object is empty and somebody forces the object to be of type Lesson", () => {
    //Defines an empty object and forces it to be of type Lesson.
    const lesson = {

    } as Lesson

    //Renders the RenderLessons component with the empty lesson object.
    render(<RenderLessons lesson={lesson} />);
  });
});