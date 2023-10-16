"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 text-3xl sm:text-5xl md:text-6xl font-bold">
      <h1>
        Your Ideas, Documents & Plans. Unified. Welcome to&nbsp;
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      <Button>
        Enter Notion
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
