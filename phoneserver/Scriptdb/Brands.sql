USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Brands](
	[brand_id] [int] IDENTITY(1,1) not null PRIMARY KEY,
	[brand_name] [nvarchar](255) NULL,
	[status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[deleted] [bit] NULL,
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
);

INSERT INTO [Brands]( brand_name,status,deleted)
   VALUES
   (N'SamSung',N'On','0'),
   (N'Apple'  ,N'On','0'),
   (N'Opple'  ,N'On','0'),
   (N'Xiaomi' ,N'On','0'),
   (N'Vivo'   ,N'On','0'),
   (N'Huawei' ,N'On','0'),
   (N'LG'     ,N'On','0'),
   (N'Sony'   ,N'On','0'),
   (N'HTC'    ,N'On','0'),
   (N'Nokia'  ,N'On','0'),
   (N'Lenovo' ,N'On','0'),
   (N'Xiaomi' ,N'On','0'),
   (N'BPhone' ,N'On','0');

ALTER TABLE [dbo].[Categories] ADD  CONSTRAINT [DF_Catagories_deleted]  DEFAULT ((0)) FOR [deleted]
GO

ALTER TABLE [dbo].[Stocks] ADD  CONSTRAINT [DF_stocks_deleted]  DEFAULT ((0)) FOR [deleted]
GO

ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Products] FOREIGN KEY([product_id])
REFERENCES [dbo].[Products] ([product_id])
GO

ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Products]
GO

ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Stores] FOREIGN KEY([store_id])
REFERENCES [dbo].[Stores] ([store_id])
GO

ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Stores]
