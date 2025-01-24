import * as React from "react";
import { Sidebar, SidebarFooter, SidebarRail } from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import SidebarMenuContent from "./sidebar-menu";
import { auth } from "@/auth";

interface CustomSession {
  name: string;
  email: string;
  avatar: string;
}

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const authSession = await auth();
  const session: CustomSession = {
    name: authSession?.user?.name ?? "Sign In",
    email: authSession?.user?.email ?? "user@example.com",
    avatar: authSession?.user?.image ?? "/avatar.png",
  };

  return (
    <Sidebar {...props}>
      <SidebarMenuContent />
      <SidebarRail />
      <div className="mt-auto">
        <SidebarFooter>
          <NavUser user={session} />
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
