"use client";

import * as React from "react";
import { Github, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";

export function SocialsToggle() {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <ToggleGroup type="multiple">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleSocialClick("https://github.com")}
      >
        <Github className="h-4 w-4" />
      </Button>
      <ModeToggle />
    </ToggleGroup>
  );
}
