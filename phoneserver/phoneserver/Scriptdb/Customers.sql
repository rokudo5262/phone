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

INSERT INTO [Customers]( firstname,middlename,lastname,email,password,gender,deleted)
   VALUES
   (N'Trịnh' ,N'Quang',N'Trường','male'  ,'truong','12345','0'),
   (N'Lê'    ,N'Văn'  ,N'A'     ,'female','a'     ,'12345','0'),
   (N'Nguyễn',N'Thị'  ,N'C'     ,'female','c'     ,'12345','0'),
   (N'Lê'    ,N'Thị'  ,N'E'     ,'female','a'     ,'12345','0'),
   (N'Nguyễn',N'Văn'  ,N'B'     ,'male'  ,'b'     ,'12345','0'),
   (N'Trần'  ,N'Văn'  ,N'D'     ,'male'  ,'d'     ,'12345','0');
   

ALTER TABLE [dbo].[Customers] ADD  CONSTRAINT [DF_Customers_deleted]  DEFAULT ((0)) FOR [deleted]
GO
