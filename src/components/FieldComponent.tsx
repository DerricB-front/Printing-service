"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function FieldComponent() {
    const [fileName, setFileName] = useState("")

    return (
        <div className="w-full max-w-md">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Print Order Form</FieldLegend>
                        <FieldDescription>
                            Fill out your details and upload your file for printing.
                        </FieldDescription>

                        {/* Full Name */}
                        <Field>
                            <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
                            <Input
                                id="full-name"
                                placeholder="Juan Dela Cruz"
                                required
                            />
                        </Field>

                        {/* Email */}
                        <Field>
                            <FieldLabel htmlFor="email">Email: (Use your PSU email)</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="***ms@psu.edu.ph"
                                required
                            />
                        </Field>

                        {/* Number of Copies */}
                        <Field>
                            <FieldLabel htmlFor="copies">Number of Copies</FieldLabel>
                            <Input
                                id="copies"
                                type="number"
                                min={1}
                                placeholder="1"
                                required
                            />
                        </Field>

                        {/* PDF Upload */}
                        <Field>
                            <FieldLabel htmlFor="pdf-file">Upload PDF File</FieldLabel>
                            <Input
                                id="pdf-file"
                                type="file"
                                accept="application/pdf"
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) setFileName(file.name)
                                }}
                                required
                            />
                            {fileName && (
                                <FieldDescription>
                                    Uploaded: <span className="font-medium">{fileName}</span>
                                </FieldDescription>
                            )}
                        </Field>

                        {/* Coupon Size */}
                        <Field>
                            <FieldLabel htmlFor="coupon-size">Coupon Size</FieldLabel>
                            <Select defaultValue="">
                                <SelectTrigger id="coupon-size">
                                    <SelectValue placeholder="Select a size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="A4">A4 (210 × 297 mm)</SelectItem>
                                    <SelectItem value="A5">A5 (148 × 210 mm)</SelectItem>
                                    <SelectItem value="Letter">Letter (8.5 × 11 in)</SelectItem>
                                    <SelectItem value="Legal">Legal (8.5 × 14 in)</SelectItem>
                                    <SelectItem value="Custom">Custom</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>

                        {/* Comments */}
                        <Field>
                            <FieldLabel htmlFor="comments">Comments</FieldLabel>
                            <Textarea
                                id="comments"
                                placeholder="Add any special instructions"
                                className="resize-none"
                            />
                        </Field>

                        {/* Date + Time for Retrieval */}
                        <div className="grid grid-cols-1 gap-4">
                            <h1>Choose when do you need it.</h1>
                            <Field>
                                <FieldLabel htmlFor="retrieval-date">Date</FieldLabel>
                                <Input id="retrieval-date" type="date" required />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="retrieval-time">Time</FieldLabel>
                                <Input id="retrieval-time" type="time" required />
                            </Field>
                        </div>
                    </FieldSet>

                    <FieldSeparator />

                    <Field orientation="horizontal" className="flex justify-between">
                        <Button type="submit">Submit Order</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}
