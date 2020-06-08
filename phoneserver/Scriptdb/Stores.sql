USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Stores](
	[store_id] [int] IDENTITY(1,1) not null PRIMARY KEY,
	[store_name][nvarchar](255) NULL,
	[phone][nvarchar](255) NULL,
	[address] [nvarchar](255) NULL,
	[street] [nvarchar](255) NULL,
	[ward][nvarchar](255) NULL,
	[district][nvarchar](255) NULL,
	[city][nvarchar](255) NULL,
	[country][nvarchar](255) NULL,
	[zip_code][nvarchar](255) NULL,
	[deleted] [bit] NULL,
	[status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
);

INSERT INTO [Stores](store_name,address,street,ward,district,city,status,deleted)
   VALUES
   (N'Chi Nhánh 1','159',N'Trần Văn Quan',N'10',N'Tân Bình',N'Thành Phố Hồ Chí Minh','Active','0'),
   (N'Chi Nhánh 2','159',N'Trần Văn Quan',N'11',N'Tân Phú',N'Thành Phố Hồ Chí Minh','Active','0');
   

ALTER TABLE [dbo].[Stores] ADD  CONSTRAINT [DF_Stores_deleted]  DEFAULT ((0)) FOR [deleted]
GO
