import React, { useEffect } from "react";
import "./css/WordAnimation.css";

const WordAnimation = () => {
  useEffect(() => {
    const span = (text, index) => {
      const node = document.createElement("span");
      node.textContent = text;
      node.style.setProperty("--index", index);
      return node;
    };

    const byWord = (text) =>
      text.split(" ").map((text, index) => span(text, index));

    const { matches: motionOK } = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    );

    if (motionOK) {
      const splitTargets = document.querySelectorAll("[split-by]");

      splitTargets.forEach((node) => {
        let nodes = byWord(node.innerText);

        if (nodes) node.firstChild.replaceWith(...nodes);
      });
    }
  }, []);

  return (
    <p className="title" split-by="word" word-animation="trampoline">
      ReckonTech
    </p>
  );
};

export default WordAnimation;
