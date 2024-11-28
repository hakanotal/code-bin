import {
  PlusCircleIcon,
  ShareIcon,
  PencilIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

interface SubbarProps {
  onSave?: () => void;
  onEdit?: () => void;
  onCopyLink?: () => void;
}

export default function Subbar({ onSave, onEdit, onCopyLink }: SubbarProps) {
  return (
    <div className="flex items-center justify-center gap-8 px-6 py-2 bg-slate-100 shadow-md">
      <Link
        href="/new"
        className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition duration-200"
      >
        <PlusCircleIcon className="w-5 h-5" />
        <span className="hidden sm:inline">New</span>
      </Link>

      <button
        disabled={!onSave}
        onClick={onSave}
        className={`flex items-center gap-2 text-gray-700 ${
          onSave ? "hover:text-blue-500" : "cursor-not-allowed opacity-50"
        } transition duration-200`}
      >
        <ClipboardDocumentCheckIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Save</span>
      </button>

      <button
        disabled={!onEdit}
        onClick={onEdit}
        className={`flex items-center gap-2 text-gray-700 ${
          onEdit ? "hover:text-blue-500" : "cursor-not-allowed opacity-50"
        } transition duration-200`}
      >
        <PencilIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Edit</span>
      </button>

      <button
        disabled={!onCopyLink}
        onClick={onCopyLink}
        className={`flex items-center gap-2 text-gray-700 ${
          onCopyLink ? "hover:text-blue-500" : "cursor-not-allowed opacity-50"
        } transition duration-200`}
      >
        <ShareIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Share</span>
      </button>
    </div>
  );
}
