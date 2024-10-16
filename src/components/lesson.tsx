import React, { useState } from "react";

//Defines the Lesson type with properties for title, description, topics, and content.
export type Lesson = {
    title: string;
    description: string;
    topics: string[];
    content: Content[];
  };
  
//The RenderLessons component dynamically renders lesson details
export default function RenderLessons({ lesson }: { lesson: Lesson }) {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  if (Object.keys(lesson).length === 0) {
    return (<li>No lesson.</li>);
  }

  return (
    <div className="p-2 md:p-6">
      <h1 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {lesson.title}
      </h1>
      <button
        onClick={toggleContentVisibility}
        className="mt-2 mb-4 p-2 bg-blue-300 hover:bg-blue-400 text-white rounded"
      >
        {isContentVisible ? "Hide Details" : "Show Details"}
      </button>

      {isContentVisible && (
        <>
          <ul className="list-disc list-inside block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {lesson.topics.map(topic => (
              <li key={lesson.title + topic}>{topic}</li>
            ))}
          </ul>
          <ul data-testid="content-list">
            {lesson.content.map((content: Content) => {
              if (content.type === "video") {
                return (
                  <RenderVideoType
                    key={content.data + "content"}
                    content={content}
                  />
                );
              }
              if (content.type === "audio") {
                return (
                  <RenderAudioType
                    key={content.data + "content"}
                    content={content}
                  />
                );
              }
              if (content.type === "podcast") {
                return (
                  <RenderPodcastType
                    key={content.data + "content"}
                    content={content}
                  />
                );
              }
              return (
                <React.Fragment key={content.data + "content"}>
                  <p>{content.data}</p>
                </React.Fragment>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

//Defines the Content type with properties for data and type.
export type Content = {
    data: string;
    type: string;
  };
  
  function RenderVideoType({ content }: {content: Content}) {
    return (
      <video className="w-full aspect-video" controls>
        <source src={content.data} type="video/mp4" />
      </video>
    );
  }
  
  function RenderAudioType({content}: {content: Content}) {
    return (
      <audio controls className="max-w-44">
        <source src={content.data} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    );
  }
  
  function RenderPodcastType({content}: {content: Content}) {
    return (
      <audio controls className="max-w-44">
        <source src={content.data} type="podcast" />
        Your browser does not support the audio element.
      </audio>
    );
  }