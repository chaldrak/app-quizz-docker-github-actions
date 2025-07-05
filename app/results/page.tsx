import ResultsPage from "@/components/results";
import { Suspense } from "react";

export default function Results() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPage />
    </Suspense>
  );
}
