import { Button, Form, Pagination, Table } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { Base } from "@/types/base";
import { Destination } from "@/types/destination";
import { Link } from "@inertiajs/react";
import { IconEye, IconPlus, IconTrash } from "justd-icons";

type DestinationIndexProps = {
    response: Base<Destination[]>;
};

export default function DestinationIndex({ response }: DestinationIndexProps) {
    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Tujuan</h1>
                    <p className="text-sm text-gray-500" >Manajemen tujuan bertamu</p>
                </div>
                <div>
                    <Link href={route('backoffice.master.destinations.create')} >
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
                                                <Link href={route('backoffice.master.destionations.show', { id: module.id })}>
                                                    <Button appearance="outline" size="extra-small">
                                                        <IconEye />
                                                    </Button>
                                                </Link>
                                                <Form method="post" action={route('backoffice.master.destionations.delete', { id: module.id })}>
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
                                <Pagination.Item variant="previous" href={route('backoffice.master.destionations.index', { page: response.prev_page })} />
                                <Pagination.Item variant="next" href={route('backoffice.master.destionations.index', { page: response.next_page })} />
                            </Pagination.List>
                        </Pagination>
                    </>
                ) : (<div className="flex flex-col items-center justify-center h-full mt-4" >No data</div>)
            }
        </div>
    );
}

DestinationIndex.layout = (page: any) => <AppLayout children={page} />;