USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Customers](
	[customer_id] [int] IDENTITY(1,1) not null PRIMARY KEY,
  [email][nvarchar](255) NULL,
  [password][nvarchar](255) NULL,
	[firstname] [nvarchar](255) NULL,
  [middlename] [nvarchar](255) NULL,
	[lastname] [nvarchar](255) NULL,
  [gender][nvarchar](255) NULL,
  [phone][nvarchar](255) NULL,
	[address] [nvarchar](255) NULL,
	[street] [nvarchar](255) NULL,
  [ward][nvarchar](255) NULL,
  [district][nvarchar](255) NULL,
  [city][nvarchar](255) NULL,
  [country][nvarchar](255) NULL,
  [zip_code][nvarchar](255) NULL,
  [dateOfBirth] [datetime] null,
	[identityCard] [nvarchar](255) null,
	[identityCardPlace] [nvarchar](255) null,
	[identityCardDate] [datetime] null,
	[identityCardAddress][nvarchar](255) null,
  [deleted] [bit] NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[updatedby] [nvarchar](255) NULL,
	[createdBy] [nvarchar](255) NULL,
	[updatedDateTime] [datetime] NULL,
	[createdDateTime] [datetime] NULL,
);

INSERT INTO [Customers]( firstname,middlename,lastname,gender,email,password,status,deleted)
   VALUES
   (N'Trịnh' ,N'Văn'  ,N'A','male'  ,'a@gmail.com' ,'123456789','Active','0'),
   (N'Lê'    ,N'Văn'  ,N'B','female','b@gmail.com','123456789','Active','0'),
   (N'Nguyễn',N'Thị'  ,N'C','female','c@gmail.com','123456789','Active','0'),
   (N'Lê'    ,N'Thị'  ,N'D','female','d@gmail.com' ,'123456789','Active','0'),
   (N'Nguyễn',N'Văn'  ,N'E','male'  ,'e@gmail.com' ,'123456789','Active','0'),
   (N'Trần'  ,N'Văn'  ,N'F','male'  ,'f@gmail.com' ,'123456789','Active','0'),
   (N'Lê'    ,N'Thị'  ,N'G','female','g@gmail.com' ,'123456789','Active','0'),
   (N'Nguyễn',N'Thị'  ,N'H','female','h@gmail.com' ,'123456789','Active','0'),
   (N'Trần'  ,N'Thị'  ,N'K','female','i@gmail.com','123456789','Active','0');
   

ALTER TABLE [dbo].[Customers] ADD  CONSTRAINT [DF_Customers_deleted]  DEFAULT ((0)) FOR [deleted]
GO
