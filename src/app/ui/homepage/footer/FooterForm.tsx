"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import { InputComponent } from "@/app/ components/inputs/ToedurCustomInputs"; // Adjust the import path as necessary
import ToedurTextareaComponent from "@/app/ components/inputs/ToedurTextareaContent"; // Adjust the import path as necessary
import ToedurDynamicButton from "@/app/ components/buttons/ToedurDynamicButton"; // Adjust the import path as necessary
import { MdDriveFileRenameOutline, MdMarkEmailRead } from "react-icons/md";
import { LuSubtitles } from "react-icons/lu"; // Ensure correct import for LuSubtitles
import { BsFillSendCheckFill } from "react-icons/bs";
import clsx from "clsx";
import { useCustomForm } from "@/app/hooks/useCustomForm";
import { useCustomToast } from "@/app/hooks/useToast";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FooterForm = () => {

  const schema = z.object({
    firstname: z.string().nonempty("First Name is required"),
    lastname: z.string().nonempty("Last Name is required"),
    email: z.string().email("Invalid email addressy"),
    subject: z.string().nonempty("Subject is required"),
    message: z.string().nonempty("Message is required"),
  });

  type Schema = z.infer<typeof schema>;

  const [isLoading, setIsLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const { showErrorToast, showSuccessToast } = useCustomToast();

  const { register, watch, handleSubmit, reset, formState } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    const result = schema.safeParse(data);

    if (!result.success) {
      setErrorOccured(true);
      // Handle the validation failure
      console.error("Validation errors:", result.error);
      showErrorToast(
        "Validation Error",
        "Please check your input and try again."
      );
      setIsLoading(false);
      return; // Stop the submission process
    }
    try {
      console.log("Form Data:", data);
      // Add your axios call or any API call here
      await axios.post("/api/toedur-endpoint-not-ready-yet", data);
      showSuccessToast("Successful!", "Message sent successfully");
      reset();
    } catch (error) {
      console.error("An error occurred!", error);
      showErrorToast("Error", `Failed to submit, The api handler function for this form is not yet implemented by the backend`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className={clsx(
        "col-span-5 grid grid-cols-4 gap-10 border-2 rounded-xl relative",
        "border-[#383838]"
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-4 text-white text-4xl font-semibold px-8 relative top-[1.5rem]">
        Send a Message
      </div>
      <div className="col-span-4 border-b border-[#383838]"></div>
      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-4 xl:col-span-2 px-8">
        <InputComponent
          register={register}
          name="firstname"
          label="First Name"
          placeholder="Enter your First Name"
          icon={<MdDriveFileRenameOutline className="size-4" />}
          inputId="firstname"
          labelId="firstname"
          type="text"
          error={errors.firstname?.message}
          formState={formState}
          watch={watch}
          disabled={isLoading}
          bgColorWhenDisabled="#383838"
        />
        <InputComponent
          register={register}
          name="lastname"
          label="Last Name"
          placeholder="Enter your Last Name"
          icon={<MdDriveFileRenameOutline className="size-4" />}
          inputId="lastname"
          labelId="lastname"
          type="text"
          error={errors.lastname?.message}
          formState={formState}
          watch={watch}
          disabled={isLoading}
          bgColorWhenDisabled="#383838"
        />
      </div>

      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-4 xl:col-span-2 px-8">
        <InputComponent
          register={register}
          name="subject"
          label="Subject"
          placeholder="Enter your Subject"
          icon={<LuSubtitles className="size-4" />}
          inputId="subject"
          labelId="subject"
          type="text"
          error={errors.subject?.message}
          formState={formState}
          watch={watch}
          disabled={isLoading}
          bgColorWhenDisabled="#383838"
        />
        <InputComponent
          register={register}
          name="email"
          label="Email"
          placeholder="Enter your email address"
          icon={<MdMarkEmailRead className="size-5" />}
          inputId="email"
          labelId="email"
          type="text"
          error={errors.email?.message}
          formState={formState}
          watch={watch}
          disabled={isLoading}
          bgColorWhenDisabled="#383838"
        />
      </div>

      <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 px-8">
        <ToedurTextareaComponent
          register={register}
          name="message"
          label="Add Your Message"
          placeholder="Add Description"
          textareaId="message"
          error={errors.message?.message}
          watch={watch}
          formState={formState}
          disabled={isLoading}
          bgColorWhenDisabled="#383838"
        />
      </div>

      <div className="col-span-4 border-b border-[#383838]"></div>

      <div className="col-span-2 py-3 px-8 relative bottom-[1.5rem]">
        <ToedurDynamicButton
          className={clsx("px-1")}
          label={isLoading ? "Submitting..." : "Submit"}
          icon={<BsFillSendCheckFill className="size-4 text-white" />}
          isLoading={isLoading}
          type="submit"
          style={{ backgroundColor: "#1360e2", color: "#fff" }}
        // onClick={() => console.log("Yesss")}
        />
      </div>
    </form>
  );
};

export default FooterForm;
