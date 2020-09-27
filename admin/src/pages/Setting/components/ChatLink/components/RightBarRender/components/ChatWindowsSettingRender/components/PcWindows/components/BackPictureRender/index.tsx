import React, {useState} from "react";
import {PropsState} from './Type';
import { Upload, message, Switch, Form } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {RemoveIcon, UploadIcon} from '@/components/Icons';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {requestBaseUrl} from '@/config';
import styles from './index.less';

function getBase64(img: any, callback:any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
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

const BackPicktrueRender = (props: PropsState) => {
  const iniLoading: boolean = false;
  const [loading, setLoading] = useState(iniLoading);
  const [imageUrl, setImageUrl] = useState('');
  const initSwitch: boolean  = true;
  const [switchState, setSwitchState] = useState(initSwitch)
  const onSwitchChange = (v: boolean):void => {

  }
  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl: any) => {
        setLoading(false)
        setImageUrl(imageUrl)
      });
    }
  };

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <UploadIcon className={styles.uploadIconRender} />}
        <div style={{ marginTop: 8 }}>文件上传</div>
      </div>
    );
    return (
      <div className={`${props.className} ${styles.backPictureMain}`}>
        <div className={styles.heaerWarpper}>
          <div className={styles.titleRender}>背景图片</div>
          <div>
            功能启用: <Switch
            defaultChecked onChange={onSwitchChange} className={styles.switchWrapper}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
          </div>
        </div>
        <Upload
          name="images"
          listType="picture-card"
          className={styles.uploadRender}
          showUploadList={false}
          action={`${requestBaseUrl}/images`}

          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ?
            <div className={styles.imgRender}>
              <div className={styles.shadeRender}><p>重新上传</p></div>
              <div className={styles.imgWrapper}>
                <RemoveIcon className={styles.removeIconRender} />
                <img src={imageUrl} alt="avatar"/>
              </div>
            </div> :
            uploadButton}
        </Upload>
      </div>
    );
}

export default BackPicktrueRender;

