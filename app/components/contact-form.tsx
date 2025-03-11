"use client";

import type React from "react";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function ContactForm() {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		error: false,
		message: "",
	});

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
		...prev,
		[id]: value,
		}));

		// Reset status when user starts typing again
		if (status.submitted) {
		setStatus({
			submitted: false,
			submitting: false,
			error: false,
			message: "",
		});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus({ ...status, submitting: true });

		try {
		const response = await axios.post(
			"https://formspree.io/f/xzzebadr",
			formData
		);

		setStatus({
			submitted: true,
			submitting: false,
			error: false,
			message: "Thank you! Your message has been sent successfully.",
		});

		// Reset form
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			message: "",
		});
		} catch (error) {
		setStatus({
			submitted: false,
			submitting: false,
			error: true,
			message:
			"Oops! There was a problem sending your message. Please try again.",
		});
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div className="space-y-2">
			<Label htmlFor="firstName">First Name</Label>
			<Input
				id="firstName"
				value={formData.firstName}
				onChange={handleChange}
				required
				placeholder="Alessandro"
			/>
			</div>
			<div className="space-y-2">
			<Label htmlFor="lastName">Last Name</Label>
			<Input
				id="lastName"
				value={formData.lastName}
				onChange={handleChange}
				required
				placeholder="Volta"
			/>
			</div>
		</div>
		<div className="space-y-2">
			<Label htmlFor="email">Email</Label>
			<Input
			id="email"
			type="email"
			value={formData.email}
			onChange={handleChange}
			required
			placeholder="alessandro.volta@example.com"
			/>
		</div>
		<div className="space-y-2">
			<Label htmlFor="phone">Phone</Label>
			<Input
			id="phone"
			type="tel"
			value={formData.phone}
			onChange={handleChange}
			placeholder="(123) 456-7890"
			/>
		</div>
		<div className="space-y-2">
			<Label htmlFor="message">Message</Label>
			<Textarea
			id="message"
			value={formData.message}
			onChange={handleChange}
			required
			placeholder="How can we help you?"
			className="min-h-[120px]"
			/>
		</div>

		{status.message && (
			<div
			className={`p-4 rounded-md ${
				status.error ? "bg-destructive/15" : "bg-green-100"
			}`}
			>
			<div className="flex items-start">
				<div className="flex-shrink-0">
				{status.error ? (
					<AlertCircle className="h-5 w-5 text-destructive" />
				) : (
					<CheckCircle2 className="h-5 w-5 text-green-600" />
				)}
				</div>
				<div className="ml-3">
				<p
					className={`text-sm ${
					status.error ? "text-destructive" : "text-green-700"
					}`}
				>
					{status.message}
				</p>
				</div>
			</div>
			</div>
		)}

		<Button
			type="submit"
			disabled={status.submitting}
			className="w-full md:w-auto"
		>
			{status.submitting ? "Sending..." : "Send Message"}
		</Button>
		</form>
	);
}
