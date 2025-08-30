<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route ::get('/products', [App\Http\Controllers\ProductsController::class, 'index']);
Route ::get('/products/{id}', [App\Http\Controllers\ProductsController::class, 'getPostById']);
Route ::post('/create', [App\Http\Controllers\ProductsController::class, 'store']);
Route ::patch('/products/{id}', [App\Http\Controllers\ProductsController::class, 'update']);
Route ::delete('/products/{id}', [App\Http\Controllers\ProductsController::class, 'destroy']);
