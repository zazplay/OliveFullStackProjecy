import React, { FC } from 'react';
import styles from './AdminNewsComp.module.css';

interface AdminNewsCompProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  editIconUrl: string;
  onEditClick: () => void;
}

const AdminNewsComp: FC<AdminNewsCompProps> = ({ 
  imageUrl, 
  title, 
  description, 
  date, 
  editIconUrl, 
  onEditClick 
}) => (
  <div className={styles.AdminNewsComp}>
    <input className={styles.AdminNewsCheckbox} type="checkbox"></input>
    <div className={styles.adminNewsItem}>
        <img className={styles.adminNewsImage} src={imageUrl} alt="News" />
        <div className={styles.adminTittleDescCont}>
            <div className={styles.tittleAdminNews}>{title}</div>
            <div className={styles.descAdminNews}>{description}</div>
        </div>
        <div className={styles.dateAdminNews}>{date}</div>
        <img 
          className={styles.editImg} 
          src={editIconUrl} 
          alt="Edit" 
          onClick={onEditClick} 
        />
        <div className={styles.editText} onClick={onEditClick}>Edit</div>
    </div>
  </div>
);

export default AdminNewsComp;
