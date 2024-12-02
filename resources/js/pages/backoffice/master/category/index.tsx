import { Button, Form, Pagination, Table } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { Base } from "@/types/base";
import { Category } from "@/types/category";
import { Link } from "@inertiajs/react";
import { IconEye, IconPlus, IconTrash } from "justd-icons";

type CategoryIndexProps = {
    response: Base<Category[]>;
};

export default function CategoryIndex({ response }: CategoryIndexProps) {
    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Kategori</h1>
                    <p className="text-sm text-gray-500" >Manajemen kategori tamu</p>
                </div>
                <div>
                    <Link href={route('backoffice.master.categories.create')} >
                        <Button appearance="outline" >
                            <IconPlus />
                            Add New
                        </Button>
                    </Link>
                </div>
            </div>
            {
                response.items.length > 0 ? (
                    <>
                        <Table className="my-4" >
                            <Table.Header className="w-full" >
                                <Table.Column isRowHeader>ID</Table.Column>
                                <Table.Column>Name</Table.Column>
                                <Table.Column>ACTION</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {
                                    response.items.map((module) => (
                                        <Table.Row key={module.id}>
                                            <Table.Cell>{module.id}</Table.Cell>
                                            <Table.Cell>{module.name}</Table.Cell>
                                            <Table.Cell className="flex space-x-2" >
                                                <Link href={route('backoffice.master.categories.show', { id: module.id })}>
                                                    <Button appearance="outline" size="extra-small">
                                                        <IconEye />
                                                    </Button>
                                                </Link>
                                                <Form method="post" action={route('backoffice.master.categories.destroy', { id: module.id })}>
                                                    <input type="hidden" name="_method" value="DELETE" />
                                                    <Button className="" appearance="outline" size="extra-small">
                                                        <IconTrash className="fill-red-500" />
                                                    </Button>
                                                </Form>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>
                        <Pagination>
                            <Pagination.List>
                                <Pagination.Item variant="previous" href={route('backoffice.master.categories.index', { page: response.prev_page })} />
                                <Pagination.Item variant="next" href={route('backoffice.master.categories.index', { page: response.next_page })} />
                            </Pagination.List>
                        </Pagination>
                    </>
                ) : (<div className="flex flex-col items-center justify-center h-full mt-4" >No data</div>)
            }
        </div>
    );
}

CategoryIndex.layout = (page: any) => <AppLayout children={page} />;