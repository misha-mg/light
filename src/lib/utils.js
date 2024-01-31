import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";

export const getHandDetector = async () => {
  const hands = handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: "mediapipe",
    modelType: "full",
    maxHands: 2,
    solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands",
  };
  return await handPoseDetection.createDetector(hands, detectorConfig);
};

export const getHandDetector2 = async (video, handposeModel) =>
  await handposeModel.estimateHands(video, false);
