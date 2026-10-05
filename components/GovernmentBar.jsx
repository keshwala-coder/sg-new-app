import { ChevronDown, Globe2 } from "lucide-react";
import  Container  from "./ui/Container";

export default function GovernmentBar() {
  return (
    <div className="border-b border-[#d9d9d9] bg-[#eeeeee]">
      <Container className="max-w-[1300px]">
        <div className="flex min-h-[30px] items-center">
          <div className="flex items-center gap-2 text-[11px] text-[#333333]">
            <Globe2
              className="h-[15px] w-[15px] text-red-600"
              strokeWidth={2}
            />

            <span>A Singapore Government Agency Website</span>

            <button
              type="button"
              className="ml-1 flex items-center gap-1 font-medium text-[#006da8] hover:underline"
            >
              How to identify
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}