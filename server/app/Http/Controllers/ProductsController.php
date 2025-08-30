<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all(); // Fetch all products from the database
       return Response()->json($products); // Return products as JSON response
    }

    public function getPostById($id)
    {
        $product = Product::find($id); // Find product by ID
        if ($product) {
            return response()->json($product); // Return product if found
        } else {
            return response()->json(['message' => 'Product not found'], 404); // Return error if not found
        }
    }           
    public function store(Request $request)
    {  
        $createdProduct = Product::create($request->only(['name', 'image', 'description', 'price', 'stock']));
        return response()->json([
            'message' => 'Product created successfully',
            'product' => $createdProduct
        ], 201);    
    }


    public function update(Request $request, string $id)
    {
        $product = Product::find($id); // Find product by ID
        if ($product) {
            $product->update($request->only(['name', 'image', 'description', 'price', 'stock'])); // Update product with request data
            return response()->json(['message' => 'Product updated successfully', 'product' => $product]);
        } else {
            return response()->json(['message' => 'Product not found'], 404); // Return error if not found
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->delete(); // Delete the product
        return response()->json(['message' => 'Product deleted successfully']);
    }
}
