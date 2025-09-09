import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ALX Listing App</h1>
      <Card title="Sample Listing" description="This is a demo listing." />
      <Button label="Click Me" />
    </div>
  );
}