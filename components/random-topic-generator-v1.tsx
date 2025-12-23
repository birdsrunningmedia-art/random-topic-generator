"use client";
import React, { useState } from "react";
import { message } from "@/data/data";
import { aiAgent } from "@/lib/actions/ai-client";
import { Loader } from "./Loader";

export default function RandomTopicGenerator() {
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState<string[] | undefined>();

  const handleResult = (input?: string): string[] => {
    return input
      ? input
          .split("|")
          .map((topic) => topic.trim())
          .filter((topic) => topic.length > 0)
      : [];
  };
  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await aiAgent(message);
      console.log(result);
      setTopics(handleResult(result));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col gap-4 py-10 items-center">
      {/* dummy logo */}
      <div>
        <p className="">{`bIRD'S rUNNING`}</p>
      </div>

      <div className="h-28 w-full flex justify-center items-center">
        <h1 className="text-2xl font-bold">Random Topic Generator</h1>
      </div>

      <div className="flex gap-2 items-center">
        <button
          disabled={loading}
          onClick={handleClick}
          className="bg-[#1c1c1c] text-[#f5f5f5] p-2 px-4 text-left hover:scale-105 hover:shadow-lg duration-300 transition-all active:bg-yellow-300"
        >
          Start <br /> Generator
        </button>
        {loading && <Loader />}
      </div>

      {topics && topics.length > 0 && (
        <div className="flex flex-col">
          {topics.map((topic, index) => (
            <div
              className="h-24 flex items-center border-b-2 border-[#1c1c1c] pl-4"
              key={index}
            >
              <p>{topic}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
