import { Button, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { showError } from "@/lib/error";
import { Destination } from "@/types/destination";
import { useForm } from "@inertiajs/react";

type DestinationFormProps = {
    destination?: Destination;
};

export default function DestinationForm({ destination }: DestinationFormProps) {

    const { data, setData, post, put, errors } = useForm<Destination>({
        name: destination?.name,
    } satisfies Destination);

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (module) {
            put(route('backoffice.master.destinations.update', { id: module?.id }), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        } else {
            post(route('backoffice.master.destinations.store'), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        }
    }

    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Tujuan</h1>
                    <p className="text-sm text-gray-500" >Form tujuan tamu</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className="my-4 grid grid-cols-12 gap-4" >
                <TextField
                    label="Nama"
                    placeholder="Nama Tujuan"
                    name="name"
                    value={data.name}
                    onChange={(value) => setData('name', value)}
                    errorMessage={errors.name}
                />
                <div className="col-span-12" >
                    <Button type="submit" >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

DestinationForm.layout = (page: any) => <AppLayout children={page} />;