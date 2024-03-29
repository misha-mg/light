"use client";

import { useEffect, useState } from "react";

const Light = () => {
  const [isActive, setIsActive] = useState(false);
  const [flashRelevant, setFlashRelevant] = useState(false);
  let active = false;

  function toggleActive() {
    setIsActive((data) => (data = !data));
  }

  useEffect(() => {
    const SUPPORTS_MEDIA_DEVICES = "mediaDevices" in navigator;

    if (SUPPORTS_MEDIA_DEVICES) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        const cameras = devices.filter(
          (device) => device.kind === "videoinput"
        );

        if (cameras.length === 0) {
          throw "No camera found on this device.";
        }
        const camera = cameras[cameras.length - 1];

        navigator.mediaDevices
          .getUserMedia({
            video: {
              deviceId: camera.deviceId,
              facingMode: ["user", "environment"],
              height: { ideal: 1080 },
              width: { ideal: 1920 },
            },
          })
          .then((stream) => {
            const track = stream.getVideoTracks()[0];

            // console.log("track", track);

            const imageCapture = new ImageCapture(track);
            const photoCapabilities = imageCapture
              .getPhotoCapabilities()
              .then(() => {
                const btn = document.querySelector(".switch");
                console.log(btn);
                btn.addEventListener("click", function () {
                  track.applyConstraints({
                    advanced: [{ torch: !active }],
                  });
                  active = !active;
                  toggleActive();
                });
              });
            setFlashRelevant(true);
          })
          .catch((error) => {
            console.log("error is: ", error);
            setFlashRelevant(false);
          });
      });
    }
  }, []);

  // const toggleState = () => {
  //   setIsActive(!isActive);
  //   console.log("toggle");
  // };

  return (
    <>
      {flashRelevant ? (
        <div className="light-toggler">
          <button className={`switch ${isActive ? "" : "active"}`}>
            {isActive}
            <span></span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Light;
