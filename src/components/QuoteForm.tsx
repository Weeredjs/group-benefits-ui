import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const INDUSTRY_CODES = [
  { label: "Technology", code: "TECH" },
  { label: "Healthcare", code: "HEALTH" },
  { label: "Education", code: "EDU" },
  { label: "Manufacturing", code: "MFG" },
  { label: "Retail", code: "RETAIL" },
  { label: "Finance/Insurance", code: "FIN" },
  { label: "Construction", code: "CONST" },
  { label: "Transportation", code: "TRANS" },
  { label: "Public Administration", code: "GOV" },
  { label: "Other", code: "OTHER" },
];

const PROVINCES = [
  "NS", "NB", "PE", "NL", "QC", "ON", "MB", "SK", "AB", "BC", "YT", "NT", "NU"
];
const COVERAGE_TIERS = ["single", "couple", "family"] as const;

const initialEmployee = {
  first_name: "",
  last_name: "",
  birth_date: "",
  coverage_tier: "single",
  annual_salary: ""
};

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: "",
    province: "NS",
    industry_code: "",
    employees: [{ ...initialEmployee }]
  });
  const [showResult, setShowResult] = useState(false);
  const [quoteResult, setQuoteResult] = useState<any>(null);

  const handleEmployerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleEmployeeChange = (idx: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const employees = [...form.employees];
    employees[idx] = { ...employees[idx], [e.target.name]: e.target.value };
    setForm(f => ({ ...f, employees }));
  };

  const addEmployee = () => {
    setForm(f => ({ ...f, employees: [...f.employees, { ...initialEmployee }] }));
  };

  const removeEmployee = (idx: number) => {
    setForm(f => ({ ...f, employees: f.employees.filter((_, i) => i !== idx) }));
  };

  const { mutate: submitQuote, isLoading } = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/quotes/`,
        {
          ...form,
          employees: form.employees.map(emp => ({
            ...emp,
            annual_salary: Number(emp.annual_salary)
          }))
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      setQuoteResult(data);
      setShowResult(true);
    },
    onError: (err) => {
      setQuoteResult({ error: "Could not fetch quote. Please check your input." });
      setShowResult(true);
    }
  });

  return (
    <>
      <form
        className="space-y-6"
        onSubmit={e => {
          e.preventDefault();
          submitQuote();
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="name"
            placeholder="Employer Name"
            value={form.name}
            onChange={handleEmployerChange}
            required
          />
          <select
            name="industry_code"
            className="border rounded p-2"
            value={form.industry_code}
            onChange={handleEmployerChange}
            required
          >
            <option value="">Select Industry</option>
            {INDUSTRY_CODES.map(({ label, code }) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
          <select
            name="province"
            className="border rounded p-2"
            value={form.province}
            onChange={handleEmployerChange}
            required
          >
            {PROVINCES.map(prov => (
              <option key={prov} value={prov}>{prov}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Employees</h3>
            <Button type="button" onClick={addEmployee} variant="secondary">
              + Add Employee
            </Button>
          </div>
          {form.employees.map((emp, idx) => (
            <Card key={idx} className="mb-3 bg-gray-50">
              <CardContent className="grid grid-cols-6 gap-2 p-2 items-end">
                <Input
                  name="first_name"
                  placeholder="First Name"
                  value={emp.first_name}
                  onChange={e => handleEmployeeChange(idx, e)}
                  required
                />
                <Input
                  name="last_name"
                  placeholder="Last Name"
                  value={emp.last_name}
                  onChange={e => handleEmployeeChange(idx, e)}
                  required
                />
                <Input
                  name="birth_date"
                  placeholder="YYYY-MM-DD"
                  type="date"
                  value={emp.birth_date}
                  onChange={e => handleEmployeeChange(idx, e)}
                  required
                />
                <select
                  name="coverage_tier"
                  className="border rounded p-2"
                  value={emp.coverage_tier}
                  onChange={e => handleEmployeeChange(idx, e)}
                  required
                >
                  {COVERAGE_TIERS.map(tier => (
                    <option key={tier} value={tier}>{tier}</option>
                  ))}
                </select>
                <Input
                  name="annual_salary"
                  placeholder="Salary"
                  type="number"
                  min={0}
                  value={emp.annual_salary}
                  onChange={e => handleEmployeeChange(idx, e)}
                  required
                />
                <Button
                  type="button"
                  variant="destructive"
                  className="h-10"
                  onClick={() => removeEmployee(idx)}
                  disabled={form.employees.length === 1}
                  title={form.employees.length === 1 ? "At least one employee required" : ""}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Requesting Quote..." : "Get Quote"}
        </Button>
      </form>

      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Quote Result</DialogTitle>
          </DialogHeader>
          {quoteResult?.error ? (
            <div className="text-red-500">{quoteResult.error}</div>
          ) : quoteResult ? (
            <div>
              <p className="font-bold mb-2">Total Premium: <span className="text-indigo-700">${quoteResult.premium_total}</span></p>
              <div className="space-y-1">
                {quoteResult.line_items.map((li: any, i: number) => (
                  <div key={i} className="flex justify-between border-b py-1">
                    <span>Employee {i + 1} ({li.benefit_code}):</span>
                    <span className="font-mono">${li.premium}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-4" onClick={() => setShowResult(false)}>
                Close
              </Button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuoteForm;