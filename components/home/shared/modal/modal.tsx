"use client";

import React from "react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";

export default function Modal({
  children,
  showModal,
  setShowModal,
}: {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const desktopModalRef = useRef(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <>
      {showModal && (
        <>
          <div
            ref={desktopModalRef}
            key="desktop-modal"
            className=" fixed inset-0 z-[200] min-h-screen items-center justify-center flex my-2"
            onMouseDown={(e) => {
              if (desktopModalRef.current === e.target) {
                setShowModal(false);
              }
            }}
          >
            <div className="max-h-full  flex justify-center ">
              <div
                key="desktop-backdrop"
                className="fixed inset-0 bg-gray-100 bg-opacity-10 backdrop-blur"
                onClick={() => setShowModal(false)}
              />
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}
