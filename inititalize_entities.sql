drop table Patient;


create table Patient
(
Patient_id varchar2(15)CONSTRAINT Patient_PATIENT_ID_pk PRIMARY KEY,
Birth_reg varchar2(25) NOT NULL,
CONSTRAINT Patient_Birth_reg UNIQUE(Birth_reg),
patient_Name VARCHAR2(50),
passport_number varchar2(15),
CONSTRAINT Patient_PASSPORT_NUMBER UNIQUE(passport_number),
blood_group varchar2(5),
patient_DOB date,
health_issues varchar2(200),
other_info varchar2(200),
address varchar2(80),
phone_number varchar2(15),
email varchar2(40)
);

commit;
