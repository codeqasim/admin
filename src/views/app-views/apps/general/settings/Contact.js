import React from 'react'
import { Input, Row, Col, Card, Form, Upload, InputNumber, message, Select, Radio } from 'antd';
import { ImageSvg } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import { LoadingOutlined } from '@ant-design/icons';

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
			<Card title="Contact Info">
                <Form.Item name="name" label="Phone number" rules={rules.name}>
				<InputNumber placeholder="Phone number" />
				</Form.Item>
                <Form.Item name="name" label="Email" rules={rules.name}>
					<Input placeholder="Email" />
				</Form.Item>
				  <Form.Item name="name" label="Address" rules={rules.name}>
				  <Input.TextArea rows={4} placeholder="Address"/>
				</Form.Item>				  
			</Card>
		</Col>
	</Row>
)

export default GeneralField
