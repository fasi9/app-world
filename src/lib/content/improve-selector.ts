import { serviceGroups } from "./services";

export interface ImproveOption {
  id: string;
  label: string;
  groupId: string;
}

/** Homepage "What would you like to improve?" selector (brief section 9.2). */
export const improveOptions: ImproveOption[] = [
  { id: "automate", label: "Automate my business", groupId: "ai-automation" },
  { id: "build", label: "Build a website or application", groupId: "web-software" },
  { id: "brand", label: "Improve my brand and user experience", groupId: "brand-experience" },
  { id: "reach", label: "Reach more customers", groupId: "marketing-social" },
  { id: "test", label: "Test and improve my software", groupId: "quality-assurance" },
];

export function groupFor(groupId: string) {
  return serviceGroups.find((g) => g.id === groupId)!;
}
