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
	[updatedby] [nvarchar](255) NULL,
	[createdBy] [nvarchar](255) NULL,
	[updatedDateTime] [datetime] NULL,
	[createdDateTime] [datetime] NULL,
);

INSERT INTO [Brands]( brand_name,deleted)
   VALUES
   (N'SamSung','0'),
   (N'Apple','0'),
   (N'Opple','0'),
   (N'Xiaomi','0'),
   (N'Vivo','0'),
   (N'Huawei','0'),
   (N'LG','0'),
   (N'Sony','0'),
   (N'HTC','0'),
   (N'Nokia','0'),
   (N'Lenovo','0'),
   (N'Xiaomi','0'),
   (N'BPhone','0');

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
