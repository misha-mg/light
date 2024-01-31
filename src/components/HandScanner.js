"use client";

import React, { useEffect, useRef, useState } from "react";
import Light from "./LightToggler";

export default function HandScanner() {
  return (
    <>
      <div className="light-container">
        <Light />
      </div>
    </>
  );
}
