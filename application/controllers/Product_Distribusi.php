<?php 

class Product_Distribusi extends CI_Controller {
	public function index(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/product_distribusi/Product_Distribusi');
		$this->load->view('web-loka/template/footer');
	}
	public function Laptop(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/product_distribusi/Laptop');
		$this->load->view('web-loka/template/footer');
	}
	public function CCTV(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/product_distribusi/CCTV');
		$this->load->view('web-loka/template/footer');
	}
	public function Jaringan(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/product_distribusi/Jaringan');
		$this->load->view('web-loka/template/footer');
	}
	public function Server(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/product_distribusi/Server');
		$this->load->view('web-loka/template/footer');
	}
	public function Software(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/product_distribusi/Software');
		$this->load->view('web-loka/template/footer');
	}
	public function Website(){
		$this->load->view('web-loka/template/header');
		$this->load->view('web-loka/product_distribusi/Website');
		$this->load->view('web-loka/template/footer');
	}
}

?>