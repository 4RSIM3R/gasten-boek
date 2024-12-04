import { Button, Select, TextField } from "@/components/ui";
import { Category } from "@/types/category";
import { Destination } from "@/types/destination";
import { Need } from "@/types/need";
import { Official } from "@/types/official";
import { useForm } from "@inertiajs/react";
import { toast, Toaster } from "sonner";

type HomeProps = {
    category: Category[],
    official: Official[],
    need: Need[],
    destination: Destination[],
};

type GuestFormSchema = {
    category_id: any;
    official_id: any;
    need_id: any;
    destination_id: any;
    name: string;
    identity_number: string;
    organization_name: string;
    phone_number: string;
    email: string;
    address: string;
};

export default function Home({ category, official, need, destination }: HomeProps) {

    const { data, setData, post, processing, errors } = useForm<GuestFormSchema>();

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        post(route('record_guest'), {
            onSuccess: (_) => {

            },
            onError: (error) => {
                toast("Whoopsss....", {
                    description: Object.keys(error)[0],
                });
            }
        });

    }

    return (
        <div className="max-w-5xl mx-auto p-8" >
            <Toaster />
            <h1 className="text-xl font-semibold text-center" >Buku Tamu</h1>
            <p className="text-center text-sm text-gray-400" >Deskripsi disini</p>
            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4 my-4" >
                <Select
                    name="category_id"
                    label="Kategori"
                    selectedKey={data.category_id}
                    onSelectionChange={(value) => setData('category_id', value)}
                    errorMessage={errors.category_id}
                    className="col-span-6"
                >
                    <Select.Trigger>Select Provider</Select.Trigger>
                    <Select.List>
                        {
                            category.map((item) => (
                                <Select.Option key={item.id} id={item.id} textValue={item.name} >
                                    {item.name}
                                </Select.Option>
                            ))
                        }
                    </Select.List>
                </Select>
                <Select
                    name="official_id"
                    label="Perangkat Daerah"
                    selectedKey={data.official_id}
                    onSelectionChange={(value) => setData('official_id', value)}
                    errorMessage={errors.official_id}
                    className="col-span-6"
                >
                    <Select.Trigger>Select Provider</Select.Trigger>
                    <Select.List>
                        {
                            official.map((item) => (
                                <Select.Option key={item.id} id={item.id} textValue={item.name} >
                                    {item.name}
                                </Select.Option>
                            ))
                        }
                    </Select.List>
                </Select>
                <Select
                    name="need_id"
                    label="Keperluan"
                    selectedKey={data.need_id}
                    onSelectionChange={(value) => setData('need_id', value)}
                    errorMessage={errors.need_id}
                    className="col-span-6"
                >
                    <Select.Trigger>Select Provider</Select.Trigger>
                    <Select.List>
                        {
                            need.map((item) => (
                                <Select.Option key={item.id} id={item.id} textValue={item.name} >
                                    {item.name}
                                </Select.Option>
                            ))
                        }
                    </Select.List>
                </Select>
                <Select
                    name="destination_id"
                    label="Tujuan"
                    selectedKey={data.destination_id}
                    onSelectionChange={(value) => setData('destination_id', value)}
                    errorMessage={errors.destination_id}
                    className="col-span-6"
                >
                    <Select.Trigger>Select Provider</Select.Trigger>
                    <Select.List>
                        {
                            destination.map((item) => (
                                <Select.Option key={item.id} id={item.id} textValue={item.name} >
                                    {item.name}
                                </Select.Option>
                            ))
                        }
                    </Select.List>
                </Select>
                <TextField
                    name="name"
                    label="Nama"
                    placeholder="Nama"
                    value={data.name}
                    onChange={(value) => setData('name', value)}
                    errorMessage={errors.name}
                    className="col-span-6"
                />
                <TextField
                    name="identity_number"
                    label="Nomor Identitas"
                    placeholder="Nomor Identitas"
                    value={data.identity_number}
                    onChange={(value) => setData('identity_number', value)}
                    errorMessage={errors.identity_number}
                    className="col-span-6"
                />
                <TextField
                    name="organization_name"
                    label="Nama Organisasi"
                    placeholder="Nama Organisasi"
                    value={data.organization_name}
                    onChange={(value) => setData('organization_name', value)}
                    errorMessage={errors.organization_name}
                    className="col-span-6"
                />
                <TextField
                    name="phone_number"
                    label="Nomor Telepon"
                    placeholder="Nomor Telepon"
                    value={data.phone_number}
                    onChange={(value) => setData('phone_number', value)}
                    errorMessage={errors.phone_number}
                    className="col-span-6"
                />
                <TextField
                    name="email"
                    label="Email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(value) => setData('email', value)}
                    errorMessage={errors.email}
                    className="col-span-6"
                />
                <TextField
                    name="address"
                    label="Alamat"
                    placeholder="Alamat"
                    value={data.address}
                    onChange={(value) => setData('address', value)}
                    errorMessage={errors.address}
                    className="col-span-6"
                />

                <div className="col-span-12" >
                    <Button isDisabled={processing} type="submit" >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
