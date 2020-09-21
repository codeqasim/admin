import React from 'react'
import { Input, Radio, Col, Card, Form, InputNumber, Select } from 'antd';

const { Option } = Select;
const legthUnit = ['cm', 'mm', 'm']
const weightUnit = ['kg', 'g', 'mg']

const ShippingField = () => {
	return (
		<Card title="Accounts">
		<Form.Item name="Users registration" label="Users registration" >
				  <Radio.Group >	
					<Radio value={1}>No</Radio>
					<Radio value={2}>Yes</Radio>
      			</Radio.Group>
				</Form.Item>
				<Form.Item name="Users reg. approval" label="Users reg. approval" >
				  <Radio.Group >	
					<Radio value={1}>Auto approve</Radio>
					<Radio value={2}>Admin approve</Radio>
      			</Radio.Group>
				</Form.Item>
				<Form.Item name="Suppliers registration" label="Suppliers registration" >
				  <Radio.Group >	
					<Radio value={1}>No</Radio>
					<Radio value={2}>Yes ( Only registered users login )</Radio>
      			</Radio.Group>
				</Form.Item>
				<Form.Item name="Reviews" label="Reviews" >
				  <Radio.Group >	
					<Radio value={1}>No</Radio>
					<Radio value={2}>Yes ( Only registered users login )</Radio>
      			</Radio.Group>
				</Form.Item>
		</Card>
	)
}

export default ShippingField
