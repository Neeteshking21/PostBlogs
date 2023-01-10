<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\artical;

class ArticalController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getAllArticals(Request $request)
    {
        try{
            $author_id = Auth::User()->id;
            $articals = artical::select("id", "title", "body", "slug")
            ->where("author", $author_id)->get()->toarray();
            $response = array("status" => "success", "data" => $articals);
            return response()->json($response);
        }
        catch(\Exception $e){
            $response = array("status" => "failed", "message" => $e->getMessage());
            return response()->json($response);
        }
    }

    public function createArticals(Request $request)
    {
        try{
            $author_id = Auth::User()->id;
            $artical = new artical;
            $artical->author = $request->author_id;
            $artical->title = $request->title;
            $artical->body = $request->body;
            $db_response = $artical->save();
            $response = array("status" => "success", "message" => "Created Sucessfully.", "data"=> $db_response);
            return response()->json($response);
        }
        catch(\Exception $e){
            $response = array("status" => "failed", "message" => $e->getMessage());
            return response()->json($response);
        }
    }

    public function updateArticals(Request $request)
    {
        try{
            $author_id = Auth::User()->id;
            $artical_id = $request->artical_id;
            $articals = artical::update($request->all())->where("id", $artical_id);
            $response = array("status" => "success", "message" => "Updated Sucessfully.");
            return response()->json($response);
        }
        catch(\Exception $e){
            $response = array("status" => "failed", "message" => $e->getMessage());
            return response()->json($response);
        }
    }

    public function deleteArticals(Request $request)
    {
        try{
            $author_id = Auth::User()->id;
            $artical_id = $request->artical_id;
            $articals = artical::where("id", $artical_id)->delete();
            $response = array("status" => "success", "message" => "Deleted Sucessfully.");
            return response()->json($response);
        }
        catch(\Exception $e){
            $response = array("status" => "failed", "message" => $e->getMessage());
            return response()->json($response);
        }
    }


}
