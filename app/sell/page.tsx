const SellProduct = () => {
	return (
		<section className="px-12 py-8 h-[86.2vh]">
			<h1 className="text-3xl font-bold mb-4 text-center">Sell a Product</h1>
			<form className="flex flex-col gap-4 max-w-lg m-auto p-4 border-2 border-gray-400 rounded-md border-opacity-10">
				<div className="mb-2">
					<label className="font-semibold" htmlFor="product-name">
						<span className="text-gray-700">Product Name</span>
					</label>
					<input
						type="text"
						id="product-name"
						name="product-name"
						className="block w-full rounded-md h-[40px] p-2 border-gray-200 border-2"
						placeholder="Lenovo laptop"
					/>
				</div>
				<div className="mb-2">
					<label className="font-semibold" htmlFor="price">
						<span className="text-gray-700">Price</span>
					</label>
					<input
						type="number"
						id="price"
						name="price"
						className="block w-full rounded-md h-[40px] p-2 border-gray-200 border-2"
						placeholder="209"
					/>
				</div>
				<div className="mb-2">
					<label className="font-semibold" htmlFor="description">
						<span className="text-gray-700">Description</span>
					</label>
					<textarea
						id="description"
						name="description"
						className="block w-full rounded-md h-[100px] p-2 border-gray-200 border-2"
						placeholder="High-performance 16-inch laptop designed specifically for creators and professionals seeking exceptional computing power and capabilities"
					/>
				</div>
				<div className="mb-2">
					<label className="font-semibold" htmlFor="image">
						<span className="text-gray-700">Image</span>
					</label>
					<input
						type="file"
						id="image"
						name="image"
						className="block w-full rounded-md h-[50px] p-2 border-gray-200 border-2"
					/>
				</div>
				<div className="mb-2">
					<label className="font-semibold" htmlFor="email">
						<span className="text-gray-700">Email</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="block w-full rounded-md h-[50px] p-2 border-gray-200 border-2"
						placeholder="example@example.com"
					/>
				</div>
				<div className="text-center">
					<button
						type="submit"
						className=" w-full border-2 border-green-700 bg-transparent text-green-700  font-sans font-semibold text-lg rounded-md p-2 hover:bg-green-700 hover:text-white transition-all duration-1000 ease-in-out">
						Add
					</button>
				</div>
			</form>
		</section>
	);
};

export default SellProduct;
