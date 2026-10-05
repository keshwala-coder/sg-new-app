import Link from "next/link";
import { CircleAlert } from "lucide-react";
import Container from "./ui/Container";

export default function ScamAlert() {
  return (
    <div className="border-b border-[#dbeafe] bg-[#eef6fb]">
      <Container  className="max-w-[1450px]">
        <div className="flex min-h-[20px] items-center gap-4 py-3">
          <CircleAlert
            className="h-[20px] w-[20px] shrink-0 text-[#364153]"
            strokeWidth={1.8}
          />

          <p className="text-[12px] leading-6 text-[#364153] sm:text-[14px]">
            MOM officers will{" "}
            <strong className="font-bold">never</strong> ask you to
            transfer money or disclose details.{" "}
            <Link
              href="/transact-safely-and-securely"
              className="font-medium text-[#005ea8] underline underline-offset-2 hover:text-[#155dfc] hover:no-underline"
            >
              Check if something is a scam.
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}