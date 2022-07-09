<?php 

class Product_Distribusi extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/product_distribusi/Product_Distribusi');
		$this->load->view('web-loka/template/footer');
	}
}

?>