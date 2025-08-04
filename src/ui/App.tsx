import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import QuoteForm from "./components/QuoteForm";

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center p-4">
    <Card className="w-full max-w-2xl shadow-2xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-indigo-700">
          Group Benefits Quoting
        </CardTitle>
      </CardHeader>
      <CardContent>
        <QuoteForm />
      </CardContent>
    </Card>
  </div>
);

export default App;
