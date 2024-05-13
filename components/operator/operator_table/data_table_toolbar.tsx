import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';



import { statuses } from './data/data';
import { Input } from '@/components/ui/input';
import { DataTableFacetedFilter } from './data_table_faceted_filter';
import { Button } from '@/components/ui/button';
import { DataTableViewOptions } from './data_table_view_options';


interface DataTableToolbarProps<TData> {
	table: Table<TData>;
}

export function DataTableToolbar<TData>({
	table,
}: DataTableToolbarProps<TData>) {
	const isFiltered =
		table.getPreFilteredRowModel().rows.length >
		table.getFilteredRowModel().rows.length;

	return (
		<div className='flex items-center justify-between'>
			<div className='flex flex-1 items-center space-x-2'>
				<Input
					placeholder='Filter by name...'
					value={
						(table.getColumn('name')?.getFilterValue() as string) ?? ''
					}
					onChange={(event: any) =>
						table.getColumn('name')?.setFilterValue(event.target.value)
					}
					className='h-8 w-[150px] lg:w-[250px]'
				/>
				{table.getColumn('status') && (
					<DataTableFacetedFilter
						column={table.getColumn('status')}
						title='Status'
						options={statuses}
					/>
				)}
				{isFiltered && (
					<Button
						variant='ghost'
						onClick={() => table.resetColumnFilters()}
						className='h-8 px-2 lg:px-3'
						asChild={false}
					>
						Reset
						<X className='ml-2 h-4 w-4' />
					</Button>
				)}
			</div>
			<DataTableViewOptions table={table} />
		</div>
	);
}