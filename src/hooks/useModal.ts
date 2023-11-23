"use client";
import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!isModalOpen);
  };

  return {
    isModalOpen,
    toggleModal,
  };
}
