import { Avatar, Button, Link, Menu, Separator, Sidebar } from "@/components/ui";
import { IconBrandApple, IconChevronLgDown, IconDatabase, IconLogout, IconSearch } from "justd-icons";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <Sidebar.Provider>
            <Sidebar collapsible="dock">
                <Sidebar.Header>
                    <Link
                        className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
                        href=""
                    >
                        <IconBrandApple className="size-5" />
                        <strong className="font-medium group-data-[collapsible=dock]:hidden">Gastenboek</strong>
                    </Link>
                </Sidebar.Header>
                <Sidebar.Content  >
                    <Sidebar.Section collapsible title="Master Data" className="text-black" >
                        <Sidebar.Item icon={IconDatabase} href={route('backoffice.master.categories.index')}>
                            Kategori
                        </Sidebar.Item>
                        <Sidebar.Item icon={IconDatabase} href={route('backoffice.master.destinations.index')}>
                            Tujuan
                        </Sidebar.Item>
                        <Sidebar.Item icon={IconDatabase} href={route('backoffice.master.officials.index')}>
                            Perangkat Daerah
                        </Sidebar.Item>
                        <Sidebar.Item icon={IconDatabase} href={route('backoffice.master.questions.index')}>
                            Kuisioner
                        </Sidebar.Item>
                    </Sidebar.Section>
                </Sidebar.Content>
                <Sidebar.Footer className="lg:flex lg:flex-row hidden items-center">
                    <Button appearance="plain" aria-label="Profile" slot="menu-trigger" className="group">
                        <Avatar size="small" shape="square" src="/images/sidebar/profile-slash.jpg" />
                        <span className="group-data-[collapsible=dock]:hidden flex items-center justify-center">
                            Saul Hudson
                            <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
                        </span>
                    </Button>
                </Sidebar.Footer>
                <Sidebar.Rail />
            </Sidebar>
            <Sidebar.Inset>
                <Toaster />
                <header className="sticky justify-between sm:justify-start top-0 bg-bg h-[3.57rem] px-4 border-b flex items-center gap-x-2">
                    <span className="flex items-center gap-x-3">
                        <Sidebar.Trigger className="-mx-2" />
                        <Separator className="h-6 sm:block hidden" orientation="vertical" />
                    </span>
                    <div className="flex sm:hidden items-center gap-x-2">
                        <Button appearance="plain" aria-label="Search..." size="square-petite">
                            <IconSearch />
                        </Button>
                        <Menu>
                            <Menu.Trigger aria-label="Profile" className="flex items-center gap-x-2 group">
                                <Avatar size="small" shape="circle" src="/images/sidebar/profile-slash.jpg" />
                                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
                            </Menu.Trigger>
                            <Menu.Content className="min-w-[--trigger-width]">
                                <Menu.Item href="#">
                                    <IconLogout />
                                    Log out
                                </Menu.Item>
                            </Menu.Content>
                        </Menu>
                    </div>
                </header>
                <div className="p-4 lg:p-6 h-full">{children}</div>
            </Sidebar.Inset>
        </Sidebar.Provider>
    );
}