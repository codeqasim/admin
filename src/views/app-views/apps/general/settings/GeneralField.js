import React from 'react'
import { Input, Row, Col, Card, Form, Upload, InputNumber, message, Select, Radio } from 'antd';
import { ImageSvg } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import { LoadingOutlined } from '@ant-design/icons';
import UploadImage from './UploadImage'

const { Dragger } = Upload;
const { Option } = Select;

const rules = {
	name: [
		{
			required: true,
			message: 'Please enter business name',
		}
	],
	description: [
		{
			required: true,
			message: 'Please enter business description',
		}
	],
	price: [
		{
			required: true,
			message: 'Please enter product price',
		}
	],
	comparePrice: [		
	],
	taxRate: [		
		{
			required: true,
			message: 'Please enter tax rate',
		}
	],
	cost: [		
		{
			required: true,
			message: 'Please enter item cost',
		}
	]
}

const imageUploadProps = {
  name: 'file',
	multiple: true,
	listType: "picture-card",
	showUploadList: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
}

const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const categories = ['Cloths', 'Bags', 'Shoes', 'Watches', 'Devices']
const tags = ['Cotton', 'Nike', 'Sales', 'Sports', 'Outdoor', 'Toys', 'Hobbies' ]

const GeneralField = props => (
	<Row gutter={16}>
		<Col xs={24} sm={24} md={17}>
			<Card title="General Settings">
				<Form.Item name="name" label="Site title" rules={rules.name}>
					<Input placeholder="Site title" />
				</Form.Item>
				<Form.Item name="name" label="Home title" rules={rules.name}>
					<Input placeholder="Home title" />
				</Form.Item>
				<Form.Item name="name" label="Site URL" rules={rules.name}>
					<Input placeholder="Site URL" />
				</Form.Item>
				<Form.Item name="address" label="Address" rules={rules.description}>
					<Input.TextArea rows={4} />
				</Form.Item>
				<Form.Item name="name" label="License key" rules={rules.name}>
					<Input placeholder="License key" />
				</Form.Item>
				<Form.Item name="name" label="Copyrights" rules={rules.name}>
					<Input placeholder="Copyrights" />
				</Form.Item>
				  <Form.Item name="Restrict website" label="Restrict website" >
				  <Radio.Group >	
					<Radio value={1}>No</Radio>
					<Radio value={2}>Yes ( Only registered users login )</Radio>
      			</Radio.Group>
				</Form.Item>
			</Card>
			<Card title="Multi Language">
			<Form.Item name="Multi language" label="Multi language" rules={rules.multiLanguage}>
				<Radio.Group >	
					<Radio value={1}>Enabled</Radio>
					<Radio value={2}>Disabled</Radio>
      			</Radio.Group>
	  			</Form.Item>
				  <Form.Item name="language select" label="Default language" >
					<Select className="w-100" placeholder="Default language">
						{
							categories.map(elm => (
								<Option key={elm} value={elm}>{elm}</Option>
							))
						}
					</Select>
				</Form.Item>
			</Card>
			<Card title="Multi Currency">
			<Form.Item name="Multi currency" label="Multi currency" rules={rules.multiCurrency}>
				<Radio.Group >	
					<Radio value={1}>Enabled</Radio>
					<Radio value={2}>Disabled</Radio>
      			</Radio.Group>
	  			</Form.Item>
				  <Form.Item name="Currency select" label="Default currency" >
					<Select className="w-100" placeholder="Default currency">
						{
							categories.map(elm => (
								<Option key={elm} value={elm}>{elm}</Option>
							))
						}
					</Select>
				</Form.Item>
			</Card>
		</Col>
		<Col xs={24} sm={24} md={7}>
			<Card title="Business Logo">
				<UploadImage />
			</Card>
			<Card title="Favicon">
				<UploadImage />
			</Card>
			{/* <Card title="Organization">
				<Form.Item name="category" label="Category" >
					<Select className="w-100" placeholder="Category">
						{
							categories.map(elm => (
								<Option key={elm} value={elm}>{elm}</Option>
							))
						}
					</Select>
				</Form.Item>
				<Form.Item name="tags" label="Tags" >
				<Select mode="tags" style={{ width: '100%' }} placeholder="Tags">
					{tags.map(elm => <Option key={elm}>{elm}</Option>)}
				</Select>
				</Form.Item>
			</Card> */}
		</Col>
	</Row>
)

export default GeneralField
