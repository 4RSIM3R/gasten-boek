import { Button, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { showError } from "@/lib/error";
import { Category } from "@/types/category";
import { useForm } from "@inertiajs/react";

type CategoryFormProps = {
    category?: any;
};

export default function CategoryForm({ category }: CategoryFormProps) {

    const { data, setData, post, put, errors } = useForm<Category>({
        name: category?.name,
    } satisfies Category);

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (category) {
            put(route('backoffice.master.categories.update', { id: category?.id }), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        } else {
            post(route('backoffice.master.categories.store'), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        }
    }

    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Kategori</h1>
                    <p className="text-sm text-gray-500" >Form kategori tamu</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className="my-4 grid grid-cols-12 gap-4" >
                <TextField
                    label="Nama"
                    placeholder="Nama Kategori"
                    name="name"
                    autoComplete="one-time-code"
                    value={data.name}
                    onChange={(value) => setData('name', value)}
                    errorMessage={errors.name}
                    className="col-span-12"
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

CategoryForm.layout = (page: any) => <AppLayout children={page} />;