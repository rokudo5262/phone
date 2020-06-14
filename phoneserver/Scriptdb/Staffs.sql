USE [phone]
GO

/****** Object:  Table [dbo].[Staffs]    Script Date: 5/15/2020 4:00:31 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Staffs](
	[staff_id] [int] IDENTITY(1,1) NOT NULL,
	[manager_id] [int] NULL,
	[store_id] [int] NULL,
	[email] [nvarchar](255) NULL,
	[password] [nvarchar](255) NULL,
	[firstname] [nvarchar](255) NULL,
	[middlename] [nvarchar](255) NULL,
	[lastname] [nvarchar](255) NULL,
	[gender] [nvarchar](255) NULL,
	[phone] [nvarchar](255) NULL,
	[address] [nvarchar](255) NULL,
	[street] [nvarchar](255) NULL,
	[ward] [nvarchar](255) NULL,
	[district] [nvarchar](255) NULL,
	[city] [nvarchar](255) NULL,
	[country] [nvarchar](255) NULL,
	[zip_code] [nvarchar](255) NULL,
	[dateOfBirth] [datetime] NULL,
	[identityCard] [nvarchar](255) NULL,
	[identityCardPlace] [nvarchar](255) NULL,
	[identityCardDate] [datetime] NULL,
	[identityCardAddress] [nvarchar](255) NULL,
	[deleted] [bit] NOT NULL,
	[status] [nvarchar](255) NULL,
	[remark] [nvarchar](255) NULL,
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
PRIMARY KEY CLUSTERED 
(
	[staff_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [Staffs]( firstname,middlename,lastname,gender,email,password,status,deleted)
   VALUES
   (N'Trịnh' ,N'Văn'  ,N'Một' ,'male'  ,'mot@gmail.com' ,'123456789','Active','0'),
   (N'Lê'    ,N'Văn'  ,N'Hai' ,'female','hai@gmail.com','123456789','Active','0'),
   (N'Nguyễn',N'Thị'  ,N'Ba'  ,'female','ba@gmail.com'  ,'123456789','Active','0'),
   (N'Lê'    ,N'Thị'  ,N'Bốn' ,'female','bon@gmail.com' ,'123456789','Active','0'),
   (N'Nguyễn',N'Văn'  ,N'Năm' ,'male'  ,'nam@gmail.com' ,'123456789','Active','0'),
   (N'Trần'  ,N'Văn'  ,N'Sáu' ,'male'  ,'sau@gmail.com' ,'123456789','Active','0'),
   (N'Lê'    ,N'Thị'  ,N'Bảy' ,'female','bay@gmail.com' ,'123456789','Active','0'),
   (N'Nguyễn',N'Thị'  ,N'Tám' ,'female','tam@gmail.com' ,'123456789','Active','0'),
   (N'Trần'  ,N'Thị'  ,N'Chín','female','chin@gmail.com','123456789','Active','0');
   

ALTER TABLE [dbo].[Customers] ADD  CONSTRAINT [DF_Customers_deleted]  DEFAULT ((0)) FOR [deleted]
GO

ALTER TABLE [dbo].[Staffs]  WITH CHECK ADD  CONSTRAINT [FK_Staffs_Staffs] FOREIGN KEY([manager_id])
REFERENCES [dbo].[Staffs] ([staff_id])
GO

ALTER TABLE [dbo].[Staffs] CHECK CONSTRAINT [FK_Staffs_Staffs]
GO

ALTER TABLE [dbo].[Staffs]  WITH CHECK ADD  CONSTRAINT [FK_Staffs_Stores] FOREIGN KEY([store_id])
REFERENCES [dbo].[Stores] ([store_id])
GO

ALTER TABLE [dbo].[Staffs] CHECK CONSTRAINT [FK_Staffs_Stores]
GO

